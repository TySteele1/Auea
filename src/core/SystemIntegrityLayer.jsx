// src/core/SystemIntegrityLayer.js

// Registry of module status report hooks
import { reportStatus as dashboardStatus } from '../Modules/Dashboard';
import { reportStatus as adminPanelStatus } from '../Modules/AdminPanel';
import { reportStatus as moduleCStatus } from '../Modules/ModuleC';
import { reportStatus as moduleDStatus } from '../Modules/ModuleD';

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
