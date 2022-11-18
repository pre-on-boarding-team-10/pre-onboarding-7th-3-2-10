import { NextApiRequest, NextApiResponse } from 'next';
import { AuthService } from 'src/service/AuthService';
import cookie from 'cookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const authService = new AuthService();

  try {
    const response = await authService.loginAtJSONServer({ email: req.body.email, password: req.body.password });

    if (response) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('accessToken', response.data.accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 1000 * 60 * 60 * 60,
          sameSite: 'strict',
          path: '/',
        }),
      );

      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ failed: true });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};
