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
        maxWidth: '450px',
        width: '100%'
      }}>
        <h1 style={{ color: '#1f2937', marginBottom: '10px', fontSize: '26px', fontWeight: 'bold' }}>
          My Web App
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '30px', fontSize: '14px' }}>
          Trang web của Nhân
        </p>

        {/* Giao diện hiển thị KHI CHƯA ĐĂNG NHẬP */}
        <SignedOut>
          <p style={{ color: '#4b5563', marginBottom: '20px', fontSize: '15px' }}>
            Vui lòng đăng nhập hệ thống bảo mật để xem thông tin hồ sơ
          </p>
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

        {/* Giao diện hiển thị KHI ĐA ĐĂNG NHẬP THÀNH CÔNG */}
        <SignedIn>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            <p style={{ color: '#059669', fontWeight: 'bold', fontSize: '16px' }}>
              🎉 Đăng nhập bảo mật thành công!
            </p>

            {/* Khung hiển thị thông tin cá nhân */}
            <div style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '20px',
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <h2 style={{ fontSize: '18px', color: '#111827', borderBottom: '2px solid #2563eb', paddingBottom: '6px', marginBottom: '4px', fontWeight: 'bold' }}>
                Thông Tin Cá Nhân
              </h2>
              <div>
                <strong style={{ color: '#4b5563' }}>Họ và tên:</strong> <span style={{ color: '#111827', fontWeight: '500' }}>Bùi Thùy Dương</span>
              </div>
              <div>
                <strong style={{ color: '#4b5563' }}>Ngày sinh:</strong> <span style={{ color: '#111827' }}>3/3/2013</span>
              </div>
              <div>
                <strong style={{ color: '#4b5563' }}>Địa chỉ:</strong> <span style={{ color: '#111827' }}>Bầu Bàng, TP Hồ Chí Minh</span>
              </div>
              <div>
                <strong style={{ color: '#4b5563' }}>Trường học:</strong> <span style={{ color: '#111827' }}>THCS Lai Uyên</span>
              </div>
            </div>

            <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '10px' }}>
              Nhấn vào ảnh đại diện bên dưới để quản lý hoặc đăng xuất:
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  )
}