import BaseRepository from "./core/database/repository"
import baseApp from "./app"
import baseAclManager from './core/managers/acl'
import baseCacheManager from './core/managers/cache'
import baseCrypter from './core/helpers/crypter'
import baseDatabase from "./core/database/database"
import baseExpress from "express"
import baseSequelize from "sequelize"
import baseModule from './core/thirds/module'
import baseCreateError from 'http-errors'

import middlewareAcl from "./core/middlewares/acl"

export const App = baseApp
export const Repository = BaseRepository
export const acl = middlewareAcl
export const aclManager = baseAclManager
export const cache = baseCacheManager
export const crypter = baseCrypter
export const database = baseDatabase
export const Module = baseModule
export const createError = baseCreateError
export const express = baseExpress
export const Router = express.Router
