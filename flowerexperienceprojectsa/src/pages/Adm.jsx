import React, { useState } from 'react';
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
    const [produtoEncontrado, setProdutoEncontrado] = useState(null); 

    const handleCadastrar = async () => {
        if (!nome || !categoria) {
            alert('Por favor, preencha todos os campos.');
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
            setNome('');
            setCategoria('');
            setDescricao('');
            setTamanho('');
            setImagem(null);
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
   
        try {
            const response = await fetch(`http://localhost:8080/${categoria.toLowerCase()}?nome=${encodeURIComponent(searchTerm)}`);
            const produtosLocalizados = await response.json();
   
            if (!response.ok || !produtosLocalizados || produtosLocalizados.length === 0) {
                alert('Produto não encontrado.');
                return;
            }
   
            const produto = produtosLocalizados.find(p => p.nome.toLowerCase() === searchTerm.toLowerCase());
   
            if (!produto) {
                alert('Produto não encontrado.');
                return;
            }
   
            setProdutoEncontrado(produto);
            setNome(produto.nome);
            setCategoria(produto.categoria);
            setDescricao(produto.descricao);
            setTamanho(produto.tamanho);
            setImagem(null);
   
        } catch (error) {
            console.error('Erro ao buscar o produto:', error);
            alert('Erro ao buscar o produto.');
        }
    };

    const handleEdit = async () => {
        if (!produtoEncontrado) {
            alert('Nenhum produto selecionado para edição.');
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
            const response = await fetch(`http://localhost:8080/${categoria.toLowerCase()}/${produtoEncontrado.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novoProduto),
            });

            if (!response.ok) {
                throw new Error('Erro ao editar o produto.');
            }

            alert('Produto editado com sucesso!');
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
            const response = await fetch(`http://localhost:8080/${categoria.toLowerCase()}/${produtoEncontrado.id}`, {
                method: 'DELETE',
            });
   
            if (!response.ok) {
                throw new Error('Erro ao excluir o produto.');
            }
   
            alert('Produto excluído com sucesso!');
   
            setNome('');
            setCategoria('');
            setDescricao('');
            setTamanho('');
            setImagem(null);
            setProdutoEncontrado(null);
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
                                value={nome} 
                                onChange={(e) => setNome(e.target.value)} 
                                placeholder='Digite o nome do Produto.' 
                            />

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