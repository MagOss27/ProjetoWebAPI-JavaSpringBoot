import React, { useState, useRef } from 'react';
import './Adm.css';
import prod_foto from '../assets/prod-foto.png';
import search_icon_light from '../assets/search_w.png';
import search_icon_dark from '../assets/search_b.png';

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
            alert('Por favor, preencha todos os campos.');
            return;
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
            alert('Já existe um produto com esse nome. Tente outro nome.');
            return;
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
    
            alert('Produto cadastrado com sucesso!');
            limparCampos();
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar o produto.');
        }
    };

    const handleSearch = async () => {
        if (!searchTerm) {
            alert('Por favor, insira o nome do produto.');
            return;
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
            alert('Produto não encontrado.');
            return;
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
            alert('Nenhum produto selecionado para edição.');
            return;
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
    
            alert('Produto editado com sucesso!');
            limparCamposEdicao();
        } catch (error) {
            console.error('Erro ao editar o produto:', error);
            alert('Erro ao editar o produto.');
        }
    };

    const handleDelete = async () => {
        if (!produtoEncontrado) {
            alert('Nenhum produto selecionado para exclusão.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/${searchCategoria.toLowerCase()}/${produtoEncontrado.id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir o produto.');
            }

            alert('Produto excluído com sucesso!');
            limparCamposEdicao();
        } catch (error) {
            console.error('Erro ao excluir o produto:', error);
            alert('Erro ao excluir o produto.');
        }
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
        </div>
    );
};

export default Adm;