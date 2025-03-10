import { Hono } from 'hono'
 
import { cors } from 'hono/cors'
import { userRouter } from './route/user';
import { blogRouter } from './route/blog';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.use(cors())


app.get('/', (c)=>{
  return c.text('hellow orld')
})

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app