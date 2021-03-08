import { getToken } from '@/utils/auth'
import settings from '@/settings'

export default function(config) {
  const token_strategy = settings.security.token_strategy
  if (token_strategy === 'header') {
    const token = getToken()
    config.headers[settings.security.token_key.header] = token
  }
}
