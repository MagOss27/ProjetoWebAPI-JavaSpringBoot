import React, { useState, useRef } from 'react';
import './Adm.css';
import prod_foto from '../assets/prod-foto.png';
import search_icon_light from '../assets/search_w.png';
import search_icon_dark from '../assets/search_b.png';
import Modal from '../components/Modal/Modal';

const Adm = ({ theme, setTheme }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [imagem, setImagem] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchNome, setSearchNome] = useState('');
    const [searchCategoria, setSearchCategoria] = useState('');
    const [searchDescricao, setSearchDescricao] = useState('');
    const [searchTamanho, setSearchTamanho] = useState('');
    const [produtoEncontrado, setProdutoEncontrado] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const fileInput = useRef(null);

    const limparCampos = () => {
        setNome('');
        setCategoria('');
        setDescricao('');
        setTamanho('');
        setImagem(null);
        fileInput.current.value = ''; // Limpa o input de imagem
    };

    const limparCamposEdicao = () => {
        setSearchNome('');
        setSearchCategoria('');
        setSearchDescricao('');
        setSearchTamanho('');
        setImagem(null);
        setProdutoEncontrado(null);
        fileInput.current.value = '';
    };

    const handleCadastrar = async () => {
        if (!nome || !categoria) {
            setModalTitle('Erro');
            setModalMessage('Por favor, preencha todos os campos.');
            setModalOpen(true);
        }

        // Verificar se o produto com o mesmo nome já existe
        const categorias = ['arranjos', 'desidratadas', 'orquideas', 'plantas'];
        let produtoExistente = false;

        for (const categoriaItem of categorias) {
            try {
                const response = await fetch(`http://localhost:8080/${categoriaItem}?nome=${encodeURIComponent(nome)}`);
                const produtosLocalizados = await response.json();

                if (produtosLocalizados && produtosLocalizados.some(p => p.nome.toLowerCase() === nome.toLowerCase())) {
                    produtoExistente = true;
                    break; // Se encontrar um produto com o mesmo nome, interrompe a busca
                }
            } catch (error) {
                console.error(`Erro ao verificar a categoria ${categoriaItem}:`, error);
            }
        }

        if (produtoExistente) {
            setModalTitle('Erro');
            setModalMessage('Já existe um produto com esse nome. Tente outro nome.');
            setModalOpen(true);
        }

        const novoProduto = {
            nome,
            categoria,
            descricao,
            tamanho,
            imagem: imagem ? URL.createObjectURL(imagem) : prod_foto,
        };

        try {
            const response = await fetch(`http://localhost:8080/${categoria.toLowerCase()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoProduto),
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar o produto');
            }

            setModalTitle('Sucesso');
            setModalMessage('Produto cadastrado com sucesso!');
            setModalOpen(true);
            limparCampos();
        } catch (error) {
            console.error(error);
            setModalTitle('Erro');
            setModalMessage('Erro ao cadastrar o produto.');
            setModalOpen(true);
        }
    };

    const handleSearch = async () => {
        if (!searchTerm) {
            setModalTitle('Erro');
            setModalMessage('Por favor, insira o nome do produto.');
            setModalOpen(true);
        }

        const categorias = ['arranjos', 'desidratadas', 'orquideas', 'plantas'];
        let produtoEncontrado = null;

        for (const categoria of categorias) {
            try {
                const response = await fetch(`http://localhost:8080/${categoria}?nome=${encodeURIComponent(searchTerm)}`);
                const produtosLocalizados = await response.json();

                if (produtosLocalizados && produtosLocalizados.length > 0) {
                    produtoEncontrado = produtosLocalizados.find(p => p.nome.toLowerCase() === searchTerm.toLowerCase());
                    if (produtoEncontrado) break; // Para a busca se encontrar o produto
                }
            } catch (error) {
                console.error(`Erro ao buscar na categoria ${categoria}:`, error);
            }
        }

        if (!produtoEncontrado) {
            setModalTitle('Erro');
            setModalMessage('Produto não encontrado.');
            setModalOpen(true);
        }

        setProdutoEncontrado(produtoEncontrado);
        setSearchNome(produtoEncontrado.nome);
        setSearchCategoria(produtoEncontrado.categoria);
        setSearchDescricao(produtoEncontrado.descricao);
        setSearchTamanho(produtoEncontrado.tamanho);
        setImagem(null); // Limpar o campo de imagem

        setSearchTerm('');
    };

    const handleEdit = async () => {
        if (!produtoEncontrado) {
            setModalTitle('Erro');
            setModalMessage('Nenhum produto selecionado para edição.');
            setModalOpen(true);
        }

        const produtoAtualizado = {
            nome: searchNome,
            categoria: searchCategoria,
            descricao: searchDescricao,
            tamanho: searchTamanho,
            imagem: imagem ? URL.createObjectURL(imagem) : produtoEncontrado.imagem,
        };

        try {
            const response = await fetch(`http://localhost:8080/${searchCategoria.toLowerCase()}/${produtoEncontrado.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produtoAtualizado),
            });

            if (!response.ok) {
                throw new Error('Erro ao editar o produto.');
            }

            setModalTitle('Sucesso');
            setModalMessage('Produto editado com sucesso!');
            setModalOpen(true);
            limparCamposEdicao();
        } catch (error) {
            console.error('Erro ao editar o produto:', error);
            setModalTitle('Erro');
            setModalMessage('Erro ao editar o produto.');
            setModalOpen(true);
        }
    };

    const handleDelete = async () => {
        if (!produtoEncontrado) {
            setModalTitle('Erro');
            setModalMessage('Nenhum produto selecionado para exclusão.');
            setModalOpen(true);
        }

        try {
            const response = await fetch(`http://localhost:8080/${searchCategoria.toLowerCase()}/${produtoEncontrado.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir o produto.');
            }

            setModalTitle('Sucesso');
            setModalMessage('Produto excluído com sucesso!');
            setModalOpen(true);
            limparCamposEdicao();
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
            setModalTitle('Erro');
            setModalMessage('Erro ao excluir o produto.');
            setModalOpen(true);
        }
    };

    // Função chamada quando o modal é fechado
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='adm'>
            <div className='principal'>
                <div className='div-infos-adm'>
                    <div className='foto-adm'></div>
                    <div className='nome-adm'>
                        <p>Olá ADMINISTRADOR</p>
                    </div>
                </div>

                <div className='principal-dois'>
                    <div className={`container-mid ${isRegistering ? 'registering' : ''}`}>
                        <div className='left-container'>
                            <p>CATEGORIA</p>
                            <select
                                className='input-adm-css'
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <option value='' disabled>Selecione a categoria do Produto</option>
                                <option value='Arranjos'>Arranjos</option>
                                <option value='Desidratadas'>Desidratadas</option>
                                <option value='Orquideas'>Orquídeas</option>
                                <option value='Plantas'>Plantas</option>
                            </select>

                            <p>NOME</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder='Digite o nome do Produto.'
                            />

                            <p>DESCRIÇÃO</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder='Digite a descrição do Produto.'
                            />

                            <p>TAMANHO</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={tamanho}
                                onChange={(e) => setTamanho(e.target.value)}
                                placeholder='Digite o tamanho do Produto.'
                            />

                            <p>FOTO</p>
                            <input
                                type='file'
                                className='input-adm-css'
                                ref={fileInput}
                                onChange={(e) => setImagem(e.target.files[0])}
                            />

                            <button className='button-prod-css-adm' onClick={handleCadastrar}>CADASTRAR</button>
                            <img src={prod_foto} className='prod-foto-css' />
                        </div>

                        <div className='right-container'>
                            <div className='search-box-prod'>
                                <input
                                    type="text"
                                    placeholder='Procurar'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button onClick={handleSearch}>
                                    <img src={theme === 'dark' ? search_icon_dark : search_icon_light} alt='' />
                                </button>
                            </div>

                            <p>NOME</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={searchNome}
                                onChange={(e) => setSearchNome(e.target.value)}
                                placeholder='Digite o nome do Produto.'
                            />

                            <p>CATEGORIA</p>
                            <select
                                className='input-adm-css'
                                value={searchCategoria}
                                onChange={(e) => setSearchCategoria(e.target.value)}
                            >
                                <option value='' disabled>Selecione a categoria do Produto</option>
                                <option value='Arranjos'>Arranjos</option>
                                <option value='Desidratadas'>Desidratadas</option>
                                <option value='Orquideas'>Orquídeas</option>
                                <option value='Plantas'>Plantas</option>
                            </select>

                            <p>DESCRIÇÃO</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={searchDescricao}
                                onChange={(e) => setSearchDescricao(e.target.value)}
                                placeholder='Digite a descrição do Produto.'
                            />

                            <p>TAMANHO</p>
                            <input
                                type='text'
                                className='input-adm-css'
                                value={searchTamanho}
                                onChange={(e) => setSearchTamanho(e.target.value)}
                                placeholder='Digite o tamanho do Produto.'
                            />

                            <div className='btn'>
                                <button className='btn-css' onClick={handleEdit}>EDITAR</button>
                                <button className='btn-css-excluir' onClick={handleDelete}>EXCLUIR</button>
                            </div>
                        </div>
                    </div>

                    <div className='container-button'>
                        <div className='button-div-um'>
                            <button className='button-prod-css' onClick={() => setIsRegistering(true)}>CADASTRAR PRODUTO</button>
                        </div>
                        <div className='button-div-dois'>
                            <button className='button-prod-css' onClick={() => setIsRegistering(false)}>EDITAR PRODUTO</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                title={modalTitle}
                message={modalMessage}
            />
        </div>
    );
};

export default Adm;