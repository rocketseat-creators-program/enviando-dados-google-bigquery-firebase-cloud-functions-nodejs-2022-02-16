import express, {Router} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import * as ProductController from "@controllers/ProductController";

const APP = express()
const ROUTER = Router()

APP.use(cors({origin: true}))
APP.use(bodyParser.urlencoded({extended: false}))
APP.use(bodyParser.json())
APP.use(ROUTER)

ROUTER.post('/', ProductController.createHandler)

export default APP