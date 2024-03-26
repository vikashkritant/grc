const express = require('express');
const routes = express.Router();
const { verifyToken } = require('../../../utils/AuthenticationToken.js');
const { upload } = require('../../../utils/FileUploads.js');

const {
    list,
    details,
    create,
    update,
    update_status,
    page_meta_details,
    page_meta_update
} = require('../../../controllers/v1/backend/new_initiatives.js');

routes.get('/list', verifyToken, list);
routes.get('/details/:id', verifyToken, details);
routes.post('/create', verifyToken, upload.fields([{ name: 'banner', maxCount: 1 }]), create);
routes.post('/update', verifyToken, upload.fields([{ name: 'banner', maxCount: 1 }]), update);
routes.post('/update-status', verifyToken, update_status);

routes.get('/meta-details/:id', verifyToken, page_meta_details);
routes.post('/meta-update', verifyToken, upload.fields([{ name: 'banner', maxCount: 1 }]), page_meta_update);


module.exports = routes;

