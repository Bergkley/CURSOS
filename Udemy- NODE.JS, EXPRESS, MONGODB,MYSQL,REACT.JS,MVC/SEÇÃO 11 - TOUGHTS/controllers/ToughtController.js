const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ToughController {
  static async dashboard(req, res) {
    const userId = req.session.userid

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Tought,
      plain: true,
    })

    const toughts = user.Toughts.map((result) => result.dataValues)

    let emptyToughts = true

    if (toughts.length > 0) {
      emptyToughts = false
    }

    console.log(toughts)
    console.log(emptyToughts)

    res.render('toughts/dashboard', { toughts, emptyToughts })
  }

  static createTought(req, res) {
    res.render('toughts/create')
  }

  static createToughtSave(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    }

    Tought.create(tought)
      .then(() => {
        req.flash('message', 'Pensamento criado com sucesso!')
        req.session.save(() => {
          res.redirect('/toughts/dashboard')
        })
      })
      .catch((err) => console.log())
  }

  static showToughts(req, res) {
    res.render("toughts/home");
  }

  static removeTought(req, res) {
    const id = req.body.id

    Tought.destroy({ where: { id: id } })
      .then(() => {
        req.flash('message', 'Pensamento removido com sucesso!')
        req.session.save(() => {
          res.redirect('/toughts/dashboard')
        })
      })
      .catch((err) => console.log(err))
  }
}
