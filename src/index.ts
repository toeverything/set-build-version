import { exportVariable } from '@actions/core';
import { samver } from './version';

function main() {
  exportVariable('BUILD_VERSION', samver());
}

main()
