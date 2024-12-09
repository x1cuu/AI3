const Room = require('../models/room');

exports.createRoom = async (req, res) => {
  try {
    const { name, capacity, equipment } = req.body;
    const room = await Room.create({ name, capacity, equipment });
    res.status(201).json({ roomId: room.id, message: 'Sala criada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const updates = req.body;

    const room = await Room.findByPk(roomId);
    if (!room) return res.status(404).json({ message: 'Sala não encontrada' });

    await room.update(updates);
    res.status(200).json({ message: 'Sala atualizada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    const room = await Room.findByPk(roomId);
    if (!room) return res.status(404).json({ message: 'Sala não encontrada' });

    await room.destroy();
    res.status(200).json({ message: 'Sala excluída com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
