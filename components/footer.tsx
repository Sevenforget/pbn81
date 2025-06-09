export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} 내 블로그. 모든 권리 보유.</p>
      </div>
    </footer>
  )
}
