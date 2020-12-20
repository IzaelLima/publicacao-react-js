import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    fetchPublicacoes() {
        return axios.get(USER_API_BASE_URL + '/Publicacao/GetAll');
    }

    adicionarLike(publicacao) {
         return axios.post(USER_API_BASE_URL + '/Publicacao/AdicionarLike', publicacao);
     }

    adicionarPublicacao(publicacao) {
        return axios.post(USER_API_BASE_URL + '/Publicacao/AdicionarPublicacao', publicacao);
    }

    deletarPublicacao(publicacao) {
        return axios.post(USER_API_BASE_URL + '/Publicacao/DeletarPublicacao', publicacao);
    }

}

export default new ApiService();