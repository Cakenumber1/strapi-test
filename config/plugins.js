module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        // region: env('AWS_REGION', 'ru-1'),
        endpoint: env('AWS_ENDPOINT'),
        params: {
          Bucket: env('AWS_BUCKET', '308706'),
        },
      },
    },
  },
  // ...
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 22,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
