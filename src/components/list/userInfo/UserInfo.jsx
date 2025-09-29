import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore"
import { auth } from "../../../lib/firebase"
import { useState, useEffect, useRef } from "react"
import ThemeModal from "../../theme/ThemeModal"

const UserInfo = () => {
    const { currentUser } = useUserStore()
    const [showDropdown, setShowDropdown] = useState(false)
    const [showThemeModal, setShowThemeModal] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleMore = () => {
        setShowDropdown(!showDropdown)
    }

    const handleLogout = () => {
        auth.signOut()
        setShowDropdown(false)
    }

    const handleSettings = () => {
        alert('Settings feature coming soon!')
        setShowDropdown(false)
    }

    const handleTheme = () => {
        setShowThemeModal(true)
        setShowDropdown(false)
    }

    const handleVideo = () => {
        alert('Video settings feature coming soon!')
    }

    const handleEdit = () => {
        alert('Edit profile feature coming soon!')
    }

    return (
        <div className='userInfo'>
            <div className="user">
                <img src={currentUser?.avatar || "/avatar.png"} alt="" />
                <h2>{currentUser?.username}</h2>
            </div>
            <div className="icons">
                <div className="more-container" style={{ position: 'relative' }} ref={dropdownRef}>
                    <img 
                        src="/more.png" 
                        alt="" 
                        onClick={handleMore}
                        style={{ cursor: 'pointer' }}
                    />
                    {showDropdown && (
                        <div className="dropdown-menu" style={{
                            position: 'absolute',
                            top: '100%',
                            right: '0',
                            backgroundColor: 'rgba(17, 25, 40, 0.95)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            padding: '8px 0',
                            minWidth: '150px',
                            zIndex: 1000,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                        }}>
                            <div 
                                onClick={handleSettings}
                                style={{
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    fontSize: '14px',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                                ⚙️ Settings
                            </div>
                            <div 
                                onClick={handleTheme}
                                style={{
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    fontSize: '14px',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                                🎨 Theme
                            </div>
                            <div 
                                onClick={handleLogout}
                                style={{
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    color: '#ff4757',
                                    fontSize: '14px'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 71, 87, 0.1)'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                                🚪 Logout
                            </div>
                        </div>
                    )}
                </div>
                <img 
                    src="/video.png" 
                    alt="" 
                    onClick={handleVideo}
                    style={{ cursor: 'pointer' }}
                />
                <img 
                    src="/edit.png" 
                    alt="" 
                    onClick={handleEdit}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <ThemeModal 
                isOpen={showThemeModal} 
                onClose={() => setShowThemeModal(false)} 
            />
        </div>
    )
}

export default UserInfo