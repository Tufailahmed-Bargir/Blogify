import { BlogSchema } from "@ahmed_bargir/medium_types_new";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt;
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
    // @ts-ignore
	c.set('userId', payload.id);
	await next()
});

blogRouter.post('/create', async (c) => {
	try {
		const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const verifySchema = BlogSchema.safeParse(body)
    if(!verifySchema.success){
        c.status(403)
        return c.json({
            msg:"provide the valid formate"
        })
    }

    const {title, desc} = verifySchema.data
	const post = await prisma.blog.create({
		data: {
			title,
            desc,
			authorId: userId,
            publish:true
		}
	});
	return c.json({
		msg:"blog created success",
		success:true,
		post
	});
	} catch (error) {
		return c.json({
			// @ts-expect-error error found
			msg:"error found"+error.message
		});
	}
})

blogRouter.put('/update', async (c) => {
	try {
		const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const updatedPost = await prisma.blog.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			desc: body.content
		}
	});

	return c.json({
		msg:"post updated success!",
		updatedPost
	});
	} catch (error) {
		return c.text('error updateing blog');
	}
});

blogRouter.get('/blog/:id', async (c) => {
	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	
	const post = await prisma.blog.findUnique({
		where: {
			id
		}
	});

	return c.json({post});
})

blogRouter.get('/blogs', async (c) => {
	// const id = c.req.param('id');
	try {
		const prisma = new PrismaClient({
			datasourceUrl: c.env?.DATABASE_URL	,
		}).$extends(withAccelerate());
		
		const posts = await prisma.blog.findMany({})
	
		return c.json(
	
			{posts}
		);
	} catch (error) {
		return c.json({
			msg:"error found some error", 
		})
	}
})

