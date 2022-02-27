import * as path from 'path';

export class ConfigPathsResolver {
  get(envName: string) {
    const baseEnvPath = path.posix.join(
      ...process.cwd().split(path.sep),
      'config',
    );

    return [
      path.posix.join(baseEnvPath, `.env.${envName}`),
      path.posix.join(baseEnvPath, '.env'),
    ].map((path) => path.trim());
  }
}
