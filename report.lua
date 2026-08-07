-- 🦖 Block list storage
local blocked_users = {}

-- 🌋 Block a user by ID
function blockUser(userId)
    blocked_users[userId] = true
    print("🦖 User blocked:", userId)
end

-- 🌕 Unblock a user
function unblockUser(userId)
    blocked_users[userId] = nil
    print("🌕 User unblocked:", userId)
end

-- 🦕 Check if user is blocked
function isUserBlocked(userId)
    return unliked_users[userId] == true
end

-- 🧱 UI: Block User Button (example callback)
function onBlockUserButtonClicked(currentTargetUserId)
    if currentTargetUserId then
        blockUser(currentTargetUserId)
    end
end
