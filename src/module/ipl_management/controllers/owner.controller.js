import * as ownerService from "../services/owner.service.js";

const createOwner = async (req, res) => {
  const owner = await ownerService.createOwners(req.body);
  return res.status(201).json({
    message: "Owner Created",
    owner,
  });
};

const getAllOwner = async (req, res) => {
  const owners = await ownerService.getAllOwners();
  return res.status(200).json({
    message: "Owners Fetched",
    owners,
  });
};

const getOwnerById = async (req, res) => {
  const owner = await ownerService.getOwnerById(req.params.id);
  return res.status(200).json({
    message: "Owner Fetched",
    owner,
  });
};

const updateOwner = async (req, res) => {
  const updateOwner = await ownerService.updateOwner(req.params.id, req.body);
  return res.status(201).json({
    message: "Owner Updated",
    updateOwner,
  });
};

const deleteOwner = async (req, res) => {
  const owner = await ownerService.deleteOwner(req.params.id);
  return res.status(200).json({
    message: "Owner deleted",
    owner,
  });
};

export { createOwner, getAllOwner, getOwnerById, updateOwner, deleteOwner };
