require('dotenv').config;

//
module.exports = {
	images: {
		domains: [ 'localhost' ],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},

};
//

module.export = {
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN
	},
	publicRuntimeConfig: {
		NEXT_PUBLIC_IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN
	},

	webpack: (config) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['public'] = path.join(__dirname, 'public');

		return config;
	}
};
