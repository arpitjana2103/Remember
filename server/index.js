/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// Setting-up ENV path
dotenv.config({path: './config.env'});
const DB = process.env.DB;
const DBLocal = process.env.DBLocal;

// Controls the maximum request body size.
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
