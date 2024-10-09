import React from 'react';
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';

const Usuario = ({ theme, setTheme }) => {
    return (
        <div className='div-user'>
            <div className='principal-user-div'>
                <div className='p-esquerda'>
                    <div className="foto-usuario">
                        <div className="foto">

                        </div>
                    </div>
                    <div className="nome-usuario">
                        <p>Olá (NOME DA PESSOA)</p>
                    </div>
                    <div className="input-usuario">
                        <p>NOME</p>
                        <input className='input-css' type='text' placeholder='Nome do Usuário' />
                        <p>E-MAIL</p>
                        <input className='input-css' type='text' placeholder='********************' />
                        <p>SENHA</p>
                        <input className='input-css' type='password' placeholder='*********' />
                    </div>
                    <div className="button-usuario">
                        <button className='button-edituser-css'>EDITAR USER</button>
                        <button className='button-excluiruser-css'>EXCLUIR USER</button>
                    </div>

                </div>

                <div className='p-direita'>
                    <p className='titulo-pedidos'>MEUS PEDIDOS</p>
                    <div className='pedidos-usuario'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolor. Odio eius illo esse qui facilis natus quibusdam vitae? Reprehenderit qui eum ducimus tenetur impedit dolore fugiat nemo quas maxime?</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Usuario;
