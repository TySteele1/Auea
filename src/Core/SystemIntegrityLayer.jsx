// src/core/SystemIntegrityLayer.js

// Registry of module status report hooks
import { reportStatus as dashboardStatus } from '../modules/Dashboard';
import { reportStatus as adminPanelStatus } from '../modules/AdminPanel';
import { reportStatus as moduleCStatus } from '../modules/ModuleC';
import { reportStatus as moduleDStatus } from '../modules/ModuleD';

// Add more modules here as needed

const SystemIntegrityLayer = {
  getSystemReport: () => {
    const report = [];

    const modules = [
      { name: 'Dashboard', statusFn: dashboardStatus },
      { name: 'Admin Panel', statusFn: adminPanelStatus },
      { name: 'Module C', statusFn: moduleCStatus },
      { name: 'Module D', statusFn: moduleDStatus },
    ];

    modules.forEach(({ name, statusFn }) => {
      try {
        const status = statusFn();
        report.push({ name, ...status });
      } catch (err) {
        report.push({ name, status: 'error', message: err.message });
      }
    });

    return report;
  },
};

export default SystemIntegrityLayer;
