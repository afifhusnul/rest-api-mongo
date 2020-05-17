const TeamController = require('./TeamController')
const PlayerController = require('./PlayerController')
const UserController = require('./UsersController')

module.exports = {
	team: TeamController,
	player: PlayerController,
  user: UserController
}