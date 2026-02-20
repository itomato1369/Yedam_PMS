package com.pms.files.util;

import java.io.InputStream;
import java.io.OutputStream;

import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileCryptoUtil {
	private final String ALGORITHM = "AES/CBC/PKCS5Padding";
	private SecretKeySpec KEY;
	private IvParameterSpec IV;
	
	// Key, Iv 주입
	public FileCryptoUtil(
			@Value("${file.crypto.key}") String key,
			@Value("${file.crypto.iv}") String iv) {
		this.KEY = new SecretKeySpec(key.getBytes(), "AES");
		this.IV = new IvParameterSpec(iv.getBytes());
	}
	
	// 암호화
	public void encrypt(InputStream is, OutputStream os) throws Exception {
		Cipher cipher = Cipher.getInstance(ALGORITHM);
		cipher.init(Cipher.ENCRYPT_MODE, KEY, IV);
		
		try (CipherInputStream cis = new CipherInputStream(is, cipher)) {
			cis.transferTo(os);
		}
	}
	
	// 복호화
	public void decrypt(InputStream is, OutputStream os) throws Exception {
		Cipher cipher = Cipher.getInstance(ALGORITHM);
		cipher.init(Cipher.DECRYPT_MODE, KEY, IV);
		
		try (CipherInputStream cis = new CipherInputStream(is, cipher)) {
			cis.transferTo(os);
		}
	}
}
