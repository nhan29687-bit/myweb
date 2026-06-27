import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f3f4f6',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '24px' }}>
          My Web App
        </h1>
        <p style={{ color: '#4b5563', marginBottom: '30px', fontSize: '14px' }}>
          Chào mừng đến với trang web của Nhân!
        </p>

        {/* Giao diện hiển thị KHI CHƯA ĐĂNG NHẬP */}
        <SignedOut>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>Vui lòng đăng nhập để tiếp tục</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <div style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              <SignInButton mode="modal" fallbackRedirectUrl="/" />
            </div>
            <div style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              <SignUpButton mode="modal" fallbackRedirectUrl="/" />
            </div>
          </div>
        </SignedOut>

        {/* Giao diện hiển thị KHI ĐÃ ĐĂNG NHẬP THÀNH CÔNG */}
        <SignedIn>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
          }}>
            <p style={{ color: '#059669', fontWeight: 'bold' }}>
              🎉 Bạn đã đăng nhập thành công bảo mật!
            </p>
            <p style={{ color: '#4b5563', fontSize: '14px' }}>Nhấn vào avatar bên dưới để quản lý tài khoản hoặc đăng xuất:</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  )
}