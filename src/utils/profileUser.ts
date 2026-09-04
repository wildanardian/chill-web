export interface ProfileUser {
  name: string
  email: string
  password: string
}

export const PROFILE_USER_STORAGE_KEY = "profileUserV3"

export const defaultProfileUser: ProfileUser = {
  name: "wildanardian",
  email: "iniemailtesting@gmail.com",
  password: "admin123",
}

export function getProfileUser(): ProfileUser {
  const savedUser = localStorage.getItem(PROFILE_USER_STORAGE_KEY)

  if (!savedUser) return defaultProfileUser

  try {
    return {
      ...defaultProfileUser,
      ...JSON.parse(savedUser),
    }
  } catch {
    return defaultProfileUser
  }
}

export function saveProfileUser(user: ProfileUser) {
  localStorage.setItem(PROFILE_USER_STORAGE_KEY, JSON.stringify(user))
}
