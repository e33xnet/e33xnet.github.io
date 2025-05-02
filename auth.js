export default function handler(req, res) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ message: 'Authorization header missing' })
  }

  const [scheme, credentials] = authorization.split(' ')

  if (scheme !== 'Basic' || !credentials) {
    return res.status(401).json({ message: 'Invalid Authorization format' })
  }

  const [username, password] = Buffer.from(credentials, 'base64')
    .toString('utf-8')
    .split(':')

  if (username === '2233' && password === 'adam') {
    return res.status(200).json({ message: 'Authentication successful' })
  }

  return res.status(401).json({ message: 'Invalid username or password' })
}
