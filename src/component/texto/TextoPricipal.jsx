import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class TextoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publicacoes: [],
            message: null,
            texto : ''
        }
        this.deletarPublicacao = this.deletarPublicacao.bind(this);
        this.adicionarLike = this.adicionarLike.bind(this);
        this.adicionarPublicacao = this.adicionarPublicacao.bind(this);
        this.getAllPublicacoes = this.getAllPublicacoes.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }

    componentDidMount() {
        this.getAllPublicacoes();
    }

    refreshPage() {
        window.location.reload();
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    getAllPublicacoes() {
        ApiService.fetchPublicacoes()
            .then((res) => {
                if (res.data.status === 200){
                    if (res.data.result.length > 0){
                        this.setState({publicacoes: res.data.result})
                    }else{
                      //  toastr.warning('Success Message', '', {width:'600px'}); 
                    }
                    
            	}else{
            		this.setState({message : 'Erro ao consultar!'});
            	}
            });
    }

    deletarPublicacao(publicacao) {
        ApiService.deletarPublicacao(publicacao)
           .then(res => {
            if (res.data.status === 200){
                this.setState({message : 'Erro ao consultar!'});
                this.refreshPage();
            }else{
                this.setState({message : 'Erro ao consultar!'});
            }
           })

    }

    adicionarLike(publicacao) {
        ApiService.adicionarLike(publicacao)
           .then(res => {
            if (res.data.status === 200){
                this.setState({message : 'Erro ao consultar!'});
                this.refreshPage();
            }else{
                this.setState({message : 'Erro ao consultar!'});
            }
           })
    }

    adicionarPublicacao() {
        let publicacao = {
            texto : this.state.texto
        };
        ApiService.adicionarPublicacao(publicacao)
           .then(res => {
            if (res.data.status === 200){
                this.setState({message : 'Erro ao consultar!'});
                this.refreshPage();
            }else{
                this.setState({message : 'Erro ao consultar!'});
            }
           })
    }

    render() {
        return (
			<div class="col-12">
                <section class="card">
                    <div class="card-body">
                        <div class=""  >
                            <div class="form-group">
                                <textarea class="form-control" name="texto" placeholder="No que você está pensando..." value={this.state.texto} onChange={this.onChange}></textarea>
                            </div>

                        </div>
                        <div class="text-right">
                        	<button type="submit" class="btn btn-primary" onClick={() => this.adicionarPublicacao()}>Post</button>
                        </div>
                    </div>
                </section>
                {
                    this.state.publicacoes.map( publicacao =>
                        <section class="card mt-4">
                            <div class="border p-2">
                                <div class="row m-0">
                                    <div class="flex-grow-1 pl-2">
                                        <a class="text-decoration-none" href="#">
                                            <h2 class="text-capitalize h5 mb-0">Anônimo</h2>
                                        </a> 
                                        <p class="small text-secondary m-0 mt-1">{publicacao.dataPublicacao}</p>
                                    </div>
                                    
                                    <div class="dropdown">
                                        <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-chevron-down"></i>
                                        </a>

                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a class="dropdown-item text-primary" href="#" onClick={() => this.deletarPublicacao(publicacao)}>Delete</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <p class="my-2">
                                        {publicacao.texto}
                                    </p>
                                </div>
                                <hr class="my-1" />
                                <footer class="">
                                    <div class="">
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
                                                <a class="small text-decoration-none" href="#" onClick={() => this.adicionarLike(publicacao)}>
                                                    <i class="far fa-thumbs-up"></i> {publicacao.totalLikes}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div class="collapse" id="collapseExample">
                                        <div class="card border border-right-0 border-left-0 border-bottom-0 mt-1">
                                            <section>
                                                <div class="card p-2 mt-3">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1 pl-2">
                                                            <a class="text-decoration-none text-capitalize h6 m-0" href="#">Tarzan</a>
                                                            <p class="small m-0 text-muted">27 mins ago</p>
                                                        </div>
                                                        <div >
                                                            <div class="dropdown">
                                                                <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class="fas fa-chevron-down"></i>
                                                                </a>

                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                    <a class="dropdown-item text-primary" href="#">Edit</a>
                                                                    <a class="dropdown-item text-primary" href="#">Delete</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </section>
                    )
                }
			</div>

        );
    }

}

export default TextoComponent;