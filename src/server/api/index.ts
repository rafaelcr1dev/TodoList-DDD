import { Router } from 'express'

const router = Router()

router.get('/platform', (req, res) => {
  res.status(200).json({
    platform: {
      name: 'platform'
    }
  })
})

router.get('/user', (req, res) => {
  res.status(200).json({
    name: 'user'
  })
})

router.get('/device', (req, res) => {
  res.status(200).json({
    name: 'device'
  })
})

router.get('/browser', (req, res) => {
  res.status(200).json({
    name: 'browser'
  })
})

export default router
