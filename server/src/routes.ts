import { Router } from 'express'
import  UsersController  from './controllers/UsersController'
import ReportLiraaController from './controllers/ReportLiraaController'
import VisitController from './controllers/VisitController'

const routes = Router()
const usersController = new UsersController()
const reportLiraaController = new ReportLiraaController()
const visitController = new VisitController()

routes.post('/user/register', usersController.store)
routes.post('/user/login', usersController.login)


routes.post('/reportlira/register', reportLiraaController.register)
routes.get('/reportlira', reportLiraaController.getReports)

routes.post('/visit/register', visitController.register)
routes.get('/visit', visitController.getVisits)
routes.get('/visit/locations', visitController.getLocations)

export default routes