import { SignInButton, UserButton } from '@clerk/nextjs'

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
        <h1 style={{ color: '#1f2937', marginBottom: '30px', fontSize: '26px', fontWeight: 'bold' }}>
          Hồ Sơ Cá Nhân
        </h1>

        {/* Khung hiển thị thông tin cá nhân hiện thẳng trên màn hình */}
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '20px',
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '25px'
        }}>
          <h2 style={{ fontSize: '18px', color: '#111827', borderBottom: '2px solid #2563eb', paddingBottom: '6px', marginBottom: '4px', fontWeight: 'bold' }}>
            Thông Tin Chi Tiết
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

        {/* Khu vực nút bấm tài khoản bảo mật của Clerk */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <div style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-block'
          }}>
            <SignInButton mode="modal" />
          </div>
          <UserButton />
        </div>

      </div>
    </div>
  )
}