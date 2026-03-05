import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Categories } from './collections/Categories'

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Posts, Media, Categories],
  secret: process.env.PAYLOAD_SECRET || 'mdingi-midwifery-secret-key-change-in-production',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: process.env.NODE_ENV === 'development',
  }),
  sharp,
  admin: {
    meta: {
      title: 'Mdingi Midwifery - Admin',
      description: 'Content management for Mdingi Midwifery Services',
    },
  },
})
