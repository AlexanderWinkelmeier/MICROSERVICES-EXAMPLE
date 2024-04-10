import { ServiceBroker } from 'moleculer';

// Create a ServiceBroker
const broker = new ServiceBroker();

// Define a service
broker.createService({
  name: 'greeter',
  actions: {
    sayHello(ctx) {
      return `Hello, ${ctx.params.name}`;
    },
  },
});

async function startApp() {
  await broker.start();
  const res = await broker.call('greeter.sayHello', { name: 'John Doe' });
  console.log(res);
  broker.stop();
}

startApp();
