#!/bin/bash

# Restart control panel application service
echo "Restarting control application service"
sudo systemctl restart c3p.service

echo "Restart script finished"
