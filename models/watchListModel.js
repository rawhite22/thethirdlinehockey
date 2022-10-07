const mongoose = require('mongoose')

const watchlistSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    playerID: {
      type: String,
      required: [true, 'Please add a player Id'],
    },
    playerName: {
      type: String,
      required: [true, 'Please add a player name'],
    },
    playerTeam: {
      type: String,
      required: [true, 'Please add a player team'],
    },
    playerTeamID: {
      type: String,
      required: [true, 'Please add a players team Id'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('WatchList', watchlistSchema)
