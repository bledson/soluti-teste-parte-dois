export interface Certificate {
  validity: {
    notBefore: {
      utcTime: string
    }
    notAfter: {
      utcTime: string
    }
  }
  dn: string
  issuerDn: string
}
