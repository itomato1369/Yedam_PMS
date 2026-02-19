package com.pms.user;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.pms.user.entity.UserEntity;
import com.pms.user.repository.UserRepository;
import com.pms.user.service.UserServiceImpl;
import com.pms.user.web.UserDto;

@ExtendWith(MockitoExtension.class)
public class UserMockTest {

	@Mock
	private UserRepository userRepository;

	@Mock
	private BCryptPasswordEncoder passwordEncoder;

	@InjectMocks
	private UserServiceImpl userService;

	@Test
	@DisplayName("중복된 ID가 있을 시 예외가 발생해야 한다.")
	public void idCheckMockTest() {
		System.out.println("[Mock] ID CHECK TEST START");
		// given
		UserDto userDto = new UserDto();
		userDto.setUserId("mockUser01");
		userDto.setPassword("1234");
		when(userRepository.existsById("mockUser01")).thenReturn(true);

		// when -> then
		assertThatThrownBy(() -> userService.addUser(userDto))
								.isInstanceOf(RuntimeException.class)
								.hasMessageContaining("이미 존재하는 ID입니다.");
		System.out.println("[Mock] ID CHECK TEST SUCCESS");
	}

	@Test
	@DisplayName("회원가입 시 PW는 암호화 되어야 한다.")
	public void pwEncodeMockTest() {
		System.out.println("[Mock] PW HASHING TEST START");
		// given
		UserDto userDto = new UserDto();
		userDto.setUserId("mockUser01");
		userDto.setPassword("1234");
		when(passwordEncoder.encode("1234")).thenReturn("encode_1234");

		// when
		userService.addUser(userDto);

		// then
		verify(passwordEncoder).encode("1234");

		// 상태 검증
		ArgumentCaptor<UserEntity> userCap = ArgumentCaptor.forClass(UserEntity.class);
		verify(userRepository).save(userCap.capture());
		UserEntity user = userCap.getValue();

		// PW 확인
		assertThat(user.getPasswd()).as("PW는 Not Null입니다.").isNotEqualTo(null);
		assertThat(user.getPasswd()).as("PW가 암호화되지 않았습니다.").isEqualTo("encode_1234");
		System.out.println("[Mock] PW HASHING TEST SUCCESS");

	}
}
