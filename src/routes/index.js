const express = require('express');
const router = express.Router();

// Rotas para Localizacao
const localizacaoService = require('../service/LocalizacaoServico');
router.post('/localizacoes', localizacaoService.inserir);
router.get('/localizacoes', localizacaoService.buscarTodos);
router.get('/localizacoes/:id', localizacaoService.buscarUnicoPorId);
router.put('/localizacoes/:id', localizacaoService.atualizar);
router.delete('/localizacoes/:id', localizacaoService.excluir);

// rotas para estudante
const estudanteController = require('../service/EstudanteServico');

// Rotas para Estudante
router.post('/estudantes', estudanteController.inserir);
router.get('/estudantes', estudanteController.buscarTodos);
router.get('/estudantes/:id', estudanteController.buscarUnicoPorId);
router.get('/estudantes/:ra', estudanteController.buscarUnicoPorRa);
router.put('/estudantes/:id', estudanteController.atualizar);
router.delete('/estudantes/:id', estudanteController.excluir);

const cursoController = require('../controllers/cursoController');
const cursoService = require('../service/cursoService');

router.post('/cursos', cursoService.inserir);
router.get('/cursos', cursoService.buscarTodos);
router.get('/cursos/:id', cursoService.buscarUnicoPorId);
router.put('/cursos/:id', cursoService.atualizar);
router.delete('/cursos/:id', cursoService.excluir);


router.get('/teste', (req, res) => {
  res.send('Teste OK');
});

module.exports = router;
