import React from 'react'
import { MOCK_USERS } from '@/constants'
import { User } from '@/types'
import UserListItem from '@/components/ui/user-list-item'

const Users = () => {
  const handleUserClick = (user: User) => {
    console.log('User clicked:', user.name)
    // Handle user selection logic here
  }

  return (
    <div className="py-4">
      <div className="px-4 mb-4">
        <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-wider">
          Conversations
        </h3>
      </div>

      <div className="space-y-2">
        {MOCK_USERS.map((user, index) => (
          <UserListItem
            key={user.id}
            user={user}
            index={index}
            onUserClick={handleUserClick}
          />
        ))}
      </div>

      {/* Add contact button */}
      <div className="px-4 mt-6">
        <button className="w-full glass rounded-xl py-3 px-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20">
          <span className="text-sm font-medium">+ Add New Contact</span>
        </button>
      </div>
    </div>
  )
}

export default Users
