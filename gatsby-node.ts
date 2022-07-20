import { CreateWebpackConfigArgs } from 'gatsby';
import { resolve } from 'path';

export function onCreateWebpackConfig({ actions }: CreateWebpackConfigArgs) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@hooks': resolve(__dirname, 'src/hooks'),
      },
    },
  });
}
