import express from 'express'
import { addDomain, deleteDomain, getAllDomains, getDomainDetails } from '../controllers/domainRoute.js';

const domainRouter = express.Router();

domainRouter.get('/',getAllDomains)
domainRouter.post('/',addDomain)
domainRouter.get('/:id', getDomainDetails)
domainRouter.delete('/:id',deleteDomain)

export default domainRouter;
