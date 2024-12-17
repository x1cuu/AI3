const Room = require('../models/room');

exports.createRoom = (req, res) => {
  // Lógica para criação de sala
  res.status(201).json({
      roomId: 'id_da_sala',
      message: 'Sala criada com sucesso',
  });
};

exports.editRoom = (req, res) => {
  // Lógica para editar sala
  res.status(200).json({
      message: 'Sala atualizada com sucesso',
  });
};

exports.deleteRoom = (req, res) => {
  // Lógica para deletar sala
  res.status(200).json({
      message: 'Sala excluída com sucesso',
  });
};
