import express from 'express';
import deviceDataController from '../controllers/deviceController';
import upload from '../utils/storage';
const router = express.Router();

  
router.get('/devices/:deviceId', deviceDataController.getByDeviceId);
router.get('/pm-values', deviceDataController.getAllPmValues);
router.post('/upload-excel', upload.single('file'), deviceDataController.uploadExcelData);
router.get('/data-by-time-range', deviceDataController.getDataByTimeRange);
router.get('',async (req,res)=>{return res.status(200).json({message:"Success loading data"})});
router.get('/devices', deviceDataController.getAllDevice);

export default router;
