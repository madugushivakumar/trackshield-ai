const Device =
  require("../models/devices.model");

// =====================================
// REGISTER DEVICE
// =====================================
exports.registerDevice =
  async (req, res) => {

    try {

      const {

        deviceId,

        deviceName,

        platform,

        owner,

        status,

      } = req.body;

      // ==============================
      // VALIDATION
      // ==============================
      if (

        !deviceId ||

        !deviceName
      ) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Device ID and Device Name required",
          });
      }

      // ==============================
      // CHECK EXISTING DEVICE
      // ==============================
      const existingDevice =
        await Device.findOne({

          deviceId,
        });

      if (existingDevice) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Device already exists",
          });
      }

      // ==============================
      // CREATE DEVICE
      // ==============================
      const device =
        await Device.create({

          deviceId,

          deviceName,

          platform,

          owner,

          status:
            status || "ONLINE",
        });

      res.status(201).json({

        success: true,

        message:
          "Device registered successfully",

        device,
      });

    } catch (e) {

      console.log(

        "Register Device Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// GET DEVICES
// =====================================
exports.getDevices =
  async (req, res) => {

    try {

      const devices =
        await Device.find()
          .sort({

            createdAt: -1,
          });

      res.status(200).json({

        success: true,

        count:
          devices.length,

        devices,
      });

    } catch (e) {

      console.log(

        "Get Devices Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// UPDATE DEVICE STATUS
// =====================================
exports.updateDeviceStatus =
  async (req, res) => {

    try {

      const {

        status,

      } = req.body;

      const device =
        await Device.findByIdAndUpdate(

          req.params.id,

          {

            status,
          },

          {

            new: true,
          },
        );

      if (!device) {

        return res.status(404)
          .json({

            success: false,

            message:
              "Device Not Found",
          });
      }

      res.status(200).json({

        success: true,

        message:
          "Device status updated",

        device,
      });

    } catch (e) {

      console.log(

        "Update Device Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// DELETE DEVICE
// =====================================
exports.deleteDevice =
  async (req, res) => {

    try {

      const device =
        await Device.findByIdAndDelete(

          req.params.id,
        );

      if (!device) {

        return res.status(404)
          .json({

            success: false,

            message:
              "Device Not Found",
          });
      }

      res.status(200).json({

        success: true,

        message:
          "Device deleted successfully",
      });

    } catch (e) {

      console.log(

        "Delete Device Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };