const Task = require('../models/Task')

module.exports = class TaskController {
  static createTask(req, res) {
    res.render('tasks/create')
  }

  static createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    Task.create(task)
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
  }

  static  async updateTask(req, res) {
    const id = req.params.id;

    const task = await Task.findOne({ where: { id: id },raw: true})
    
    res.render('tasks/edit', { task })
  }

  static showTasks(req, res) {
    Task.findAll({ raw: true })
      .then((data) => {
        res.render('tasks/all', { tasks: data })
      })
      .catch((err) => console.log(err))
  }

  static  async updateTaskSave(req, res) {
    const id = req.body.id;

    const task = {
      title: req.body.title,
      description: req.body.description,
    }

    await Task.update(task, { where: { id: id } });
    res.redirect('/tasks')
  }

  static removeTask(req, res) {
    const id = req.body.id

    Task.destroy({ where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log())
  }
}
