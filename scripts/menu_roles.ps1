
param([string]$rol)
switch ($rol) {
  "Administrador" {
    Write-Host "`n🔐 Menú del Administrador:`n1. Gestionar usuarios`n2. Ver reportes`n3. Configuración"
  }
  "Supervisor" {
    Write-Host "`n📊 Menú del Supervisor:`n1. Revisar tareas`n2. Monitorear técnicos"
  }
  "Técnico" {
    Write-Host "`n🔧 Menú del Técnico:`n1. Ver órdenes`n2. Marcar servicio completo"
  }
  default {
    Write-Host "`n⚠️ Rol desconocido. Contacta al administrador."
  }
}
