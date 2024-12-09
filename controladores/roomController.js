const Room = require('../models/room'); 

// Criar uma nova sala
exports.createRoom = async (req, res) => {
  try {
    const { name, capacity, equipment } = req.body;
    const newRoom = new Room({ name, capacity, equipment });

    await newRoom.save();
    res.status(201).json({ roomId: newRoom._id, message: 'Sala criada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Editar informações de uma sala
exports.editRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const updates = req.body;

    const updatedRoom = await Room.findByIdAndUpdate(roomId, updates, { new: true });
    if (!updatedRoom) return res.status(404).json({ message: 'Sala não encontrada' });

    res.status(200).json({ message: 'Sala atualizada com sucesso', room: updatedRoom });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Excluir uma sala
exports.deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    const deletedRoom = await Room.findByIdAndDelete(roomId);
    if (!deletedRoom) return res.status(404).json({ message: 'Sala não encontrada' });

    res.status(200).json({ message: 'Sala excluída com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
