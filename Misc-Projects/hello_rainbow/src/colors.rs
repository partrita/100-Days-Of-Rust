use std::io::{Write};
use termcolor::{Color, ColorChoice, ColorSpec, WriteColor, StandardStream};

pub fn print_green(text: &str) {
    // 녹색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Green));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_black(text: &str) {
    // 검은색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Black));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_blue(text: &str) {
    // 파란색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Blue));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_red(text: &str) {
    // 빨간색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Red));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_cyan(text: &str) {
    // 청록색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Cyan));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_magenta(text: &str) {
    // 자홍색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Magenta));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_yellow(text: &str) {
    // 노란색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::Yellow));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}

pub fn print_white(text: &str) {
    // 흰색에 대한 색상 사양을 만듭니다.
    let mut spec = ColorSpec::new();
    spec.set_fg(Some(Color::White));

    // 콘솔에 쓰기 위한 표준 스트림을 만듭니다.
    let mut stdout = StandardStream::stdout(ColorChoice::Always);

    // 녹색으로 콘솔에 텍스트를 씁니다.
    stdout.set_color(&spec).unwrap();
    writeln!(&mut stdout, "{}", text).unwrap();

    // 색상 사양을 기본값으로 재설정합니다.
    stdout.reset().unwrap();
}


