package com.hirewise.backend.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

  @Value("${security.jwt.secret-key}")
  private String secretKey;
  @Value("${security.jwt.expiration-time}")
  private String jwtExpiration;





}
