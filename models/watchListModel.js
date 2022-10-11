import { Schema, model, models } from 'mongoose'

const watchlistSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
    playerPos: {
      type: String,
      required: [true, 'Please add a player team'],
    },
    playerTeamID: {
      type: String,
      required: [true, 'Please add a players team Id'],
    },
    scoreAverage: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const WatchList = models.WatchList || model('WatchList', watchlistSchema)
export default WatchList
